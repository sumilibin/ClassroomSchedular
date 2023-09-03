

export const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "first_name",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "First name",
      width: 150,
      editable: true,
    },
    ,
    {
      field: "middle_name",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Middle name",
      width: 150,
      editable: true,
    },
    {
      field: "last_name",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "username",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Username",
      width: 150,
      editable: true,
    },
    //   {
    //     field: 'password',
    //     headerName: 'Password',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //   },
    {
      field: "password",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Password",
      width: 150,
      editable:true,
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "email_id",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Email Id",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerClassName: 'theme--header',
      headerAlign: 'center',
      headerName: "Phone",
      width: 150,
      editable: true,
    },
  ];
  
  export const rows = [
    {
        id: 1,
        first_name: "Shubham",
        middle_name: "Pravin",
        last_name: "More",
        photo: null,
        username: "shubh@gmail",
        password: "shubh",
        email_id: "shubh@abc",
        phone: 9967845101,
        classcoordinator_id: 1
    },
    {
        id: 2,
        first_name: "Milind",
        middle_name: "Ragunath",
        last_name: "Kondekar",
        photo: null,
        username: "rush@gmail",
        password: "rush1234",
        email_id: "rush@gmail",
        phone: 9967845412,
        classcoordinator_id: 1
    },
    {
        id: 4,
        first_name: "Shivani",
        middle_name: "Ramling",
        last_name: "Naiknaware",
        photo: null,
        username: "shivani@gmail",
        password: "shivani1234",
        email_id: "shivani@abc",
        phone: 9967845101,
        classcoordinator_id: 3
    }
]