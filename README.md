```graphql
# schema-codegen-start
const typeDefs = `
  type Credit_Union {
    id: ID!
    Contract_Number: String!
    Credit_Union_Name: String!
    premium_reports: [Premium_Report!]!
    premium_adjustments: [Premium_Adjustment!]!
    single_premium_certificate_returns: [Single_Premium_Certificate_Return!]!
  }

  type Premium_Report {
    id: ID!
  }

  type Premium_Adjustment {
    id: ID!
    Product_Name: String!
    Report_Period: String!
    Status: String!
    Last_Update: String!
    Period_Ending: String!
    Adjustment_Type_to_the_Credit_Union: String!
    Comment: String!
    Total_Borrower_Fees_: Float!
    CU_Retail_Rate: Float!
    Protected_Loan_Amount: Float!
    Pay_Rate: Float!
    Premium_Due: Float!
    Total_Amount: Float!
  }

  type Single_Premium_Certificate_Return {
    id: ID!
  }

  input EditPremiumAdjustmentInput {
    id: ID!
    Total_Borrower_Fees: String!
    CU_Retail_Rate: String!
    Protected_Loan_Amount: String!
    Pay_Rate: String!
    Premium_Due: String!
    Total_Amount: String!
  }

  type Query {
    searchCreditUnionByContractNumber(contractNumber: String!): [Credit_Union!]
    searchCreditUnionByName(name: String!): [Credit_Union!]
    searchCreditUnionByState(state: String!): [Credit_Union!]
    searchCreditUnionByNameAndState(name: String!, state: String!): [Credit_Union!]
  }

  type Mutation {
    editPremiumAdjustment(input: EditPremiumAdjustmentInput!): Premium_Adjustment!
  }
`;
# schema-codegen-end
```

```javascript
// resolver-codegen-start
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
// resolver-codegen-end
```