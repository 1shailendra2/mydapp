      let walletAddress = "";

      async function connectWallet() {
        if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          walletAddress = accounts[0];
          document.getElementById("wallet-address").innerText = "Connected: " + walletAddress;
        }
      }

      async function send() {
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;

        const res = await fetch("http://localhost:3000/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to, amount })
        });

        const data = await res.json();
        alert("Transaction Hash: " + data.txHash);
      }

