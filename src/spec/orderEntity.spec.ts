import OrderEntity, { Order } from "../entities/orders.entity";
import UsersEntity,{User} from "../entities/users.entity";

const _Order = new OrderEntity();
const _user = new UsersEntity();
const data: Order = {
  uid: 1,
  status: "pending",
};
const user:User={
    name:'khaled',
    username:"a",
    password:"d"
  }
 
describe("Orders Class ", () => {
    
  it(`It should create Order`, async () => {
    await _user.createUser(user)
    const result = await _Order.addOrder(data);
    expect(result[0].status).toEqual('pending');
  });
  it(`It should get  order `, async () => {
    const allProducts = await _Order.index();
    const oID = allProducts[0].id as number;
    const result = await _Order.userOrder(oID);
    expect(result[0].status).toEqual('pending');
  });
  it(`It should update  order`, async () => {
    const allOrders = await _Order.index();
    const oID = allOrders[0].id as number;
    const result = await _Order.updateOrder(oID);
    expect(result[0].status).toEqual("done");
  });
  it(`It should delete  order`, async () => {
    const users = await _Order.index();
    const uID = users[0].id as number;

    const result = await _Order.deleteOrder(uID);
    expect(result).toBeFalsy();
  });
});
