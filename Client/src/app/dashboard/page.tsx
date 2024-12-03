"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const DashboardPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/api/protegido", {
        method: "GET",
        credentials: "include", // Habilita o envio de cookies com a requisição
      });

      const jsonData = await response.json();

      setData(jsonData.response); // Atualiza o estado com os dados recebidos
    };

    fetchData();
  }, []);
  return (
    <main className='text-center'>
      <h1>COMO FICAR LOGADO</h1>
      <p>API: {data}</p>
      <Link href='/logado'>Ir para cá</Link>
    </main>
  );
};

export default DashboardPage;
