import { useEffect, useState } from "react";
import { UserService } from "../services/user.service";
import Button from "@/components/Button";
interface data {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export default function User() {
  //data state management
  const [users, setUsers] = useState<data[]>([]);
  useEffect(() => {
    UserService.getAllUsers().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div>
        {users.map((user, index) => (
          <div className="bg-slate-500" key={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <Button value={111} />
          </div>
        ))}
      </div>
    </>
  );
}
