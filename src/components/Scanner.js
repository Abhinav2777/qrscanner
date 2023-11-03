import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import "../Scanner.css";
function Scanner() {
  const [scanResult, setScanResult] = useState(null);
  const [itemData, setItemData] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
      showInformationIcon: "false",
      logoImage: null,
    });
    scanner.render(success, error);
    async function success(result) {
      scanner.clear();
      setScanResult(result);
      try {
        const response = await fetch(`http://localhost:3001/items/${result}`);
        const data = await response.json();
        setItemData(data);
      } catch (error) {
        console.error("Error fetching item data: ", error);
      }
    }
    function error(err) {
      console.warn(err);
    }
    const style = document.createElement("style");
    document.head.appendChild(style);
  }, []);
  return (
    <div className="scanner-container">
      {scanResult ? (
        <div>
          Success: <a href={scanResult}>{scanResult}</a>
        </div>
      ) : (
        <div id="reader" className="scanner"></div>
      )}
      {itemData && (
        <div>
          Item Information:
          <div>
            <p>Item Name: {itemData.name}</p>
            <p>Description: {itemData.description}</p>
            {/* Add other relevant fields */}
          </div>
        </div>
      )}
    </div>
  );
}
export default Scanner;
