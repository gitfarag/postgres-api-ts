import UsersEntity, { User } from "../entities/users.entity";

const _User = new UsersEntity();
const data: User = {
  name: "ahmed",
  username: "admin",
  password: "secret",
};

describe("users Class (create test user)", () => {
  it(`It should create user`, async () => {
    const result = await _User.createUser(data);
    expect(result).toEqual({
      id: 2,
      name: "ahmed",
      username: "admin",
      password: "secret",
      token: null as any,
    });
  });
  it(`It should get admin user`, async () => {
    const result = await _User.getUserByUsername("admin");
    expect(result).toEqual({
      id: 2,
      name: "ahmed",
      username: "admin",
      password: "secret",
      token: null as any,
    });
  });
  it(`It should update  user`, async () => {
    const users = await _User.index();
    const uID = users[0].id;

    const result = await _User.updateuser({
      id: uID,
      username: "madison",
      name: "Tester",
      password: "password123",
    });
    expect(result.name).toEqual("Tester");
  });
  it(`It should delete  user`, async () => {
    const users = await _User.index();
    const uID = users[1].id as number;

    const result = await _User.deleteUser(uID);
    expect(result).toEqual(`User deleted with ID: ${uID}`);
  });
});
