// import OrderEntity, { Order } from "../entities/orders.entity";

// const _Order = new OrderEntity();
// const data: Order = {
//   uid: 1,
//   status: "pending",
// };

// describe("Orders Class ", () => {
//   it(`It should create Order`, async () => {
//     const result = await _Order.addOrder(data);
//     expect(result).toEqual([
//       {
//         id: 1,
//         uid: 1,
//         status: "pending",
//       },
//     ]);
//   });
//   it(`It should get  order `, async () => {
//     const allProducts = await _Order.index();
//     const oID = allProducts[0].id as number;
//     const result = await _Order.userOrder(oID);
//     expect(result).toEqual([
//       {
//         id: 1,
//         uid: 1,
//         status: "pending",
//       },
//     ]);
//   });
//   it(`It should update  order`, async () => {
//     const allProducts = await _Order.index();
//     const oID = allProducts[0].id as number;
//     const result = await _Order.updateOrder(oID);
//     expect(result[0].status).toEqual("done");
//   });
//   it(`It should delete  order`, async () => {
//     const users = await _Order.index();
//     const uID = users[0].id as number;

//     const result = await _Order.deleteOrder(uID);
//     expect(result).toBeFalsy();
//   });
// });
