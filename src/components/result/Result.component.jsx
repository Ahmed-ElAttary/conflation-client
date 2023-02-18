import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import axios from "axios";
export default function Result({ sessionID }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    setLoading(true);
    try {
      const res = await axios
        .post(
          "http://localhost:1995/download",
          {
            sessionID,
          },
          { responseType: "blob" }
        )
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "files.zip");
          document.body.appendChild(link);
          link.click();
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("http://localhost:1995/result", {
          sessionID,
        });
        res.data[0].linked = (
          <Tag severity="success" value={res.data[0].linked}></Tag>
        );
        res.data[0].unlinked = (
          <Tag severity="danger" value={res.data[0].unlinked}></Tag>
        );

        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      <div className="card">
        <h1>Results</h1>
        <DataTable value={data} responsiveLayout="scroll">
          <Column field="total" header="Total"></Column>
          <Column field="linked" header="Linked"></Column>
          <Column field="unlinked" header="Unlinked"></Column>
        </DataTable>
        <br />
        <Button
          label="Download"
          icon="pi pi-download"
          iconPos="right"
          onClick={handleDownload}
          loading={loading}
        />
      </div>
    </div>
  );
}
