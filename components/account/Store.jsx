import React, { useState } from "react";
import AccountLayout from "../layout/AccountLayout";
import StoreTabs from "./store/StoreTabs";
import Orders from "./store/Orders";
import Promos from "./store/Promos";
import Coupons from "./store/Coupons";
import Wallet from "./store/Wallet";

const Store = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AccountLayout name="store">
      <div className="p-3 md:p-6">
        <div className="md:p-6 bg-white">
          <div className="border-b border-warning">
            <StoreTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="pt-6">
            {activeTab === 0 && <Orders />}
            {activeTab === 1 && <Promos />}
            {activeTab === 2 && <Coupons />}
            {activeTab === 3 && <Wallet />}
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Store;
