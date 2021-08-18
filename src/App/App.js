import React from 'react';
import Friendlist from '../components/Friendlist/Friendlist';
import friends from '../assest/friends.json';
import user from '../assest/user.json';
import Profile from '../components/Profile/Profile';
import SectionTask from '../components/SectionTask/SectionTask';
import statisticalData from '../assest/statistical-data.json';
import Statistics from '../components/Statistics/Statistics';
import transactions from '../assest/transactions.json';
import TransactionHistory from '../components/TransactionHistory/TransactionHistory';


export default function App() {
  return (
    <>
      <SectionTask title={"Домашнее задание №1"}>
        <Profile user={user} />
      </SectionTask>
      <SectionTask title={"Домашнее задание №2"}>
        <Statistics title={"Upload stats"} stats={statisticalData} />;
        <Statistics stats={statisticalData} />;
      </SectionTask>
      <SectionTask title={"Домашнее задание №3"}>
        <Friendlist friends={friends} />
      </SectionTask>
      <SectionTask title={"Домашнее задание №4"}>
        <TransactionHistory transactions={transactions} />
      </SectionTask>
    </>
  )
}


// function makeRandomColor() {
//   var c = '';
//   while (c.length < 6) {
//     c += (Math.random()).toString(16).substr(-6).substr(-1)
//   }
//   return '#' + c;
// }
