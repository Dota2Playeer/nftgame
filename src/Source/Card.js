let card = [
    ["1", {"Mechanic": {
        "Proffesion": 'Mechanic',
        "Income": '2000',
        "Taxes": '400',
        "Home_mortgage_payment": '300',
        "School_loan_payment": '0',
        "Car_load_payment": '100',
        "Credit_card_payment": '100',
        "Other_expanses": '400',
        "Bank_loan_payment": '0',
        "Children_expanses": '0',
        "Per_children_expanses": '100',
        "Home_mortage": '31000',
        "School_loans": "0",
        "Car_loans": '3000',
        "Credit_card_debt": '3000'
    }}],
    ["2", {"Janitor": {
        "Proffesion": 'Janitor',
        "Income": '1600',
        "Taxes": '300',
        "Home_mortgage_payment": '200',
        "School_loan_payment": '0',
        "Car_load_payment": '100',
        "Credit_card_payment": '100',
        "Other_expanses": '300',
        "Bank_loan_payment": '0',
        "Children_expanses": '0',
        "Per_children_expanses": '100',
        "Home_mortage": '20000',
        "School_loans": "0",
        "Car_loans": '4000',
        "Credit_card_debt": '3000'
    }}
    ],
    ["3", {"Engineer": {
        "Proffesion": 'Engineer',
        "Income": '4900',
        "Taxes": '1000',
        "Home_mortgage_payment": '700',
        "School_loan_payment": '100',
        "Car_load_payment": '100',
        "Credit_card_payment": '200',
        "Other_expanses": '1000',
        "Bank_loan_payment": '0',
        "Children_expanses": '0',
        "Per_children_expanses": '200',
        "Home_mortage": '75000',
        "School_loans": "12000",
        "Car_loans": '7000',
        "Credit_card_debt": '5000'
    }}],
    ["4", {"Engineer": {
        "Proffesion": 'Engineer',
        "Income": '4900',
        "Taxes": '1000',
        "Home_mortgage_payment": '700',
        "School_loan_payment": '100',
        "Car_load_payment": '100',
        "Credit_card_payment": '200',
        "Other_expanses": '1000',
        "Bank_loan_payment": '0',
        "Children_expanses": '0',
        "Per_children_expanses": '200',
        "Home_mortage": '75000',
        "School_loans": "12000",
        "Car_loans": '7000',
        "Credit_card_debt": '5000'
    }}],
  ]
  
  const cards = new Map(card)
  
  
  Mechanic = cards.get("id").Doctor
  
  console.log(Mechanic)