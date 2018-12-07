// import { Input } from 'antd';

// const Inputs = () => (
//   <div>
//     <label>
//       Стоимость: <Input type="number" defaultValue="2000000"/> руб.
//     </label>
//     <br/>
//     <label>
//       На руках:
//       <Input type="number" defaultValue="200000"/> руб.
//     </label>
//     <br/>
//     <label>
//       Срок кредита:
//       <Input type="number" defaultValue="5"/> лет.
//     </label>
//   </div>
// );
const Inputs = () => (
  <div>
    <label>
      Стоимость: <input type="number" name="price" value="2000000"/> руб.
    </label>
    <br/>
    <label>
      На руках:
      <input type="number" name="money" value="200000"/> руб.
    </label>
    <br/>
    <label>
      Срок кредита:
      <input type="number" name="duration" value="5"/> лет.
    </label>
  </div>
);
