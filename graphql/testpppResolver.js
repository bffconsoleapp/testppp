const resolvers = {
  Query: {
    searchCreditUnionByContractNumber: (parent, args, context, info) => {
      // Placeholder sample data and logic
      return creditUnions.filter(cu => cu.Contract_Number === args.contractNumber);
    },
    searchCreditUnionByName: (parent, args, context, info) => {
      // Placeholder sample data and logic
      return creditUnions.filter(cu => cu.Credit_Union_Name.includes(args.name));
    },
    searchCreditUnionByState: (parent, args, context, info) => {
      // Placeholder sample data and logic
      return creditUnions.filter(cu => cu.state === args.state);
    },
    searchCreditUnionByNameAndState: (parent, args, context, info) => {
      // Placeholder sample data and logic
      return creditUnions.filter(
        cu => cu.Credit_Union_Name.includes(args.name) && cu.state === args.state
      );
    },
  },

  Mutation: {
    editPremiumAdjustment: (parent, args, context, info) => {
      // Implement logic to find and update the Premium_Adjustment
      let adjustment = premiumAdjustments.find(adj => adj.id === args.input.id);
      if (adjustment) {
        adjustment.Total_Borrower_Fees_ = parseFloat(args.input.Total_Borrower_Fees);
        adjustment.CU_Retail_Rate = parseFloat(args.input.CU_Retail_Rate);
        adjustment.Protected_Loan_Amount = parseFloat(args.input.Protected_Loan_Amount);
        adjustment.Pay_Rate = parseFloat(args.input.Pay_Rate);
        adjustment.Premium_Due = parseFloat(args.input.Premium_Due);
        adjustment.Total_Amount = parseFloat(args.input.Total_Amount);
        // Sample logic ends
      }
      return adjustment;
    },
  },
};

const creditUnions = [
  // Mock data for credit unions
];

const premiumAdjustments = [
  // Mock data for premium adjustments
];
//

export default resolvers;