import { StandardTokenABI, SecurityTokenAddress } from '../Web3/abi';


approveTransfer = (SecurityTokenAddress, userAddress, collateralAmount) => {

    // Transaction 1 Approval

    var self = this;
    const tokenContractInstance = window.web3.eth.contract(StandardTokenABI).at(SecurityTokenAddress);
    tokenContractInstance.approve(userAddress, collateralAmount, {
          from: window.web3.eth.accounts[0]
        },
        async (err, res) => {
          if (!err) {
            console.log(res);
            const receipt = await this.getTransactionReceipt(res)
            // console.log("Receipt : ",receipt);
            //self.setState({approveRequestAlert:false, transferCollateralAlert:true})
          } else {}
    });
  }

  TransferToken = (userAddress) => {

      var self = this;
      // Transaction 2 Transfer to Loan Contract

      const LoanInstance = window.web3.eth.contract(LoanContractABI).at(loanContractAddress);
      LoanInstance.transferCollateralToLoan({
        from: window.web3.eth.accounts[0]
          }, async (err, res) => {
          if(!err)
              console.log(res);
              const receipt = await this.getTransactionReceipt(res)
              console.log("Receipt : ",receipt);
              if(receipt)
                self.setState({transferCollateralAlert:false, transferCollateralSuccessAlert:true})
              else
                self.setState({transferCollateralAlert:false, transferCollateralFailAlert:true})

          });
  }