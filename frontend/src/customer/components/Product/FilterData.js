export const filters = [
    // {
    //     id: "size",
    //     name: "Size",
    //     options: [
    //         { value: "100ml", label: "30ml" },
    //         { value: "200ml", label: "50ml" },
    //         { value: "300ml", label: "100ml" },
    //         { value: "400ml", label: "125ml" }
    //     ],
    // },
];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: '99-299', label: "₹99 To ₹299" },
            { value: '299-499', label: "₹299 To ₹499" },
            { value: '499-699', label: "₹499 To ₹699" },
            { value: '699-1199', label: "₹699 To ₹1199" },
            { value: '1199-1699', label: "₹1199 To ₹1699" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            {
                value: "10",
                label: "10% And Above",
            },
            {
                value: "20",
                label: "20% And Above",
            },
            {
                value: "30",
                label: "30% And Above",
            },
            {
                value: "40",
                label: "40% And Above",
            },
        ],
    },
    // {
    //     id:"stock",
    //     name:"Availability",
    //     options:[
    //         {value:"in_stock",label:"In Stock"},
    //         {value:"out_of_stock",label:"Out Of Stock"},
    //     ],
    // },
]