import db from "../providers/database.provider";

interface User {
  id?: number;
  name: string;
  username: string;
  password: string;
  token?: string;
}

class UsersEntity {
  async index(): Promise<User[]> {
    try {
      const { rows } = await db.query("SELECT * FROM users ");
      return rows;
    } catch (error: any) {
      return error?.message;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      const { name, username, password } = user;
      const { rows } = await db.query(
        "INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING *",
        [name, username, password]
      );
      return rows[0];
    } catch (error: any) {
      return error?.message;
    }
  }

  async getUserByUsername(username: string): Promise<User> {
    const { rows } = await db.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return rows[0];
  }

  async deleteUser(user:User): Promise<string> {
    try {
      const id:number = user.id as unknown as number
      await db.query("DELETE FROM users WHERE id = $1", [id]);
      return `User deleted with ID: ${id}`;
    } catch (error) {
      return `cannot delete user`;
    }
  }

  async updateuser(user: User): Promise<User> {
    try {
      const { id, name, username, password } = user;
      const sql =
        "UPDATE users SET name = $1, username=$2, password=$3 WHERE id = $4 RETURNING *";
      const { rows } = await db.query(sql, [name, username, password, id]);
      return rows[0];
    } catch (error: any) {
      return error.message;
    }
  }
}

export { User };
export default UsersEntity;
