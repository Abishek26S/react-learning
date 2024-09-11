import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const UserForm = () => {
  const [filter, setFilter] = useState("");
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0);
  const decrement = () => setCount(previCount => previCount - 1);
  const increment = () => setCount(previCount => previCount + 1);

  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };
  const getData = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${count}`;
      const res = await axios.get(url);
      setUserData([{...res.data}]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userData);
  
  const filterValue = () => {
    const filteredData = userData.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
    return filteredData;
  };

  const filteredData = filter ? filterValue() : userData;

  useEffect(() => {
    if(count>0){
    getData();
    }
  }, [count]);
  return (
    <>
        <button onClick={decrement}>-</button>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
      <form onSubmit={handleOnChange}>
        <div>please search</div>
        <input
          value={filter}
          name="email"
          type="text"
          placeholder="Please enter your search"
          onChange={handleOnChange}
        />
      </form>
      <div>
        {filteredData?.map((ele) => (
          <React.Fragment key= {ele.id}>
            <h1>{ele?.title}</h1>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default UserForm;