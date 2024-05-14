import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import axios from "axios";

const GetAllProductsPagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage, pageSize]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${
          (currentPage - 1) * pageSize
        }&select=title,price`
      );
      setData(response.data);
      setTotalItems(response.data.length); // Update total items based on API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))} */}
      <div>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={totalItems}
        onChange={handlePageChange(page, pageSize)}
      />
    </div>
  );
};

export default GetAllProductsPagination;
