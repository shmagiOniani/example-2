export const userInputTypes = [
  // name
  {
    xs: 12,
    sm: 6,
    inputType: "text",
    userId: "firstName",
    userName: "firstName",
    userLabel: "სახელი",
    error: "firstnameError",
  },
  // lastname
  {
    xs: 12,
    sm: 6,
    inputType: "text",
    userId: "lastName",
    userName: "lastName",
    userLabel: "გვარი",
    error: "lastnameError",
  },
  // personalId
  {
    xs: 12,
    sm: 6,
    inputType: "text",
    userId: "personalNumber",
    userName: "personalNumber",
    userLabel: "პირადი ნომერი",
    error: "personalNumberError",
  },
  // email
  {
    xs: 12,
    sm: 6,
    inputType: "email",
    userId: "formGridEmail",
    userName: "email",
    userLabel: "ელ.ფოსტა",
    error: "emailError",
  },
  // mobile
  {
    xs: 12,
    sm: 6,
    inputType: "text",
    userId: "phoneNumber",
    userName: "phoneNumber",
    userLabel: "მობილური",
    error: "phoneNumberError",
  },
  // birthDate
  {
    xs: 12,
    sm: 6,
    inputType: "date",
    userId: "birthDate",
    userName: "birthDate",
    userLabel: "დაბადების თარიღი",
    error: "birthDayError",
  },
  // profession
  {
    xs: 12,
    sm: 6,
    inputType: "text",
    userId: "profession",
    userName: "profession",
    userLabel: "თანამდებობა",
    error: "professionError",
  },
  // position
  {
    xs: 12,
    sm: 6,
    inputType: "text",
    userId: "position",
    userName: "position",
    userLabel: "თანამდებობა",
    error: "positionError",
  },
  // gender
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "choose-gender",
    userName: "gender",
    userLabel: "აირჩიეთ სქესი",
    error: "genderError",
    option: [
      {
        key: "male",
        name: "მამრობითოი",
      },
      {
        key: "female",
        name: "მდედრობითი",
      },
    ],
  },
  // bloodGroup
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "bloodGroup",
    userName: "bloodGroup",
    userLabel: "სისხლის ჯგუფი",
    error: "bloodGroupError",
    option: [
      {
        key: "|",
        name: "|",
      },
      {
        key: "||",
        name: "||",
      },
      {
        key: "|||",
        name: "|||",
      },
      {
        key: "|V",
        name: "|V",
      },
    ],
  },
  // bloodType
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "bloodType",
    userName: "bloodType",
    userLabel: "სისხლის რეზუსი",
    error: "bloodTypeError",
    option: [
      {
        key: "positive ",
        name: "დადებითი",
      },
      {
        key: "negative",
        name: "უარყოფითი",
      },
    ],
  },
  // allergy
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "allergy",
    userName: "allergy",
    userLabel: "ალერგიები",
    error: "allergyError",
    option: [
      {
        key: "yes",
        name: "დიახ",
      },
      {
        key: "no",
        name: "არა",
      },
    ],
  },
  // smok4r
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "smoker",
    userName: "smoker",
    userLabel: "მწეველი",
    error: "smokerError",
    option: [
      {
        key: "yes",
        name: "დიახ",
      },
      {
        key: "no",
        name: "არა",
      },
    ],
  },
  // convictions
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "convictions",
    userName: "convictions",
    userLabel: "ნასამართლევი",
    error: "convictionsError",
    option: [
      {
        key: "yes",
        name: "დიახ",
      },
      {
        key: "no",
        name: "არა",
      },
    ],
  },
  // marriageStatus
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "marriageStatus",
    userName: "marriageStatus",
    userLabel: "ნასამართლევი",
    error: "marriageStatusError",
    option: [
      {
        key: "yes",
        name: "დიახ",
      },
      {
        key: "no",
        name: "არა",
      },
    ],
  },
  // secondaryPhone
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "secondaryPhone",
    userName: "secondaryPhone",
    userLabel: "მეორე ნომერი",
    error: "secondaryPhoneError",
  },
  // relativePhone
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "relativePhone",
    userName: "relativePhone",
    userLabel: "ნათესავის ნომერი",
    error: "relativePhoneError",
  },

  // secondaryEmail
  {
    xs: 12,
    sm: 4,
    inputType: "email",
    userId: "secondaryEmail",
    userName: "secondaryEmail",
    userLabel: "მეორე ელ.ფოსტა",
    error: "secondaryEmailError",
  },
  // legalAddress
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "legalAddress",
    userName: "legalAddress",
    userLabel: "იურიდიული მისამართი",
    error: "legalAddressError",
  },

  // factAddress
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "factAddress",
    userName: "factAddress",
    userLabel: "ფაქტიური მისამართი",
    error: "factAddressError",
  },
  // bankName
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "bankName",
    userName: "bankName",
    userLabel: "ბანკის დასახელება",
    error: "bankNameError",
  },
  // bankCode
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "bankCode",
    userName: "bankCode",
    userLabel: "ბანკის კოდი",
    error: "bankCodeError",
  },
  // accountNumber
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "accountNumber",
    userName: "accountNumber",
    userLabel: "ანგარიშის ნომერი",
    error: "accountNumberError",
  },

  // customWorkingTime
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "customWorkingTime",
    userName: "customWorkingTime",
    userLabel: "სამსახურის მისამართი",
    error: "customWorkingTimeError",
  },
  // workZipCode
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "workZipCode",
    userName: "workZipCode",
    userLabel: "სამსახურის საფოსტო კოდი",
    error: "workZipCodeError",
  },
  // flexitime
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "flexitime",
    userName: "flexitime",
    userLabel: "თავისუფალი გრაფიკი",
    error: "flexitimeError",
    option: [
      {
        key: "yes",
        name: "დიახ",
      },
      {
        key: "no",
        name: "არა",
      },
    ],
  },
  // salaryPeriod
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "salaryPeriod",
    userName: "salaryPeriod",
    userLabel: "ხელფასის პერიოდულობა",
    error: "salaryPeriodError",
    option: [
      {
        key: "yes",
        name: "დიახ",
      },
      {
        key: "no",
        name: "არა",
      },
    ],
  },
  // salary
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "salary",
    userName: "salary",
    userLabel: "დარიცხული ხელფასი",
    error: "salaryError",
  },
  // overtimeSalary
  {
    xs: 12,
    sm: 4,
    inputType: "text",
    userId: "overtimeSalary",
    userName: "overtimeSalary",
    userLabel: "ზეგანაკვეთური(1სთ)",
    error: "overtimeSalaryError",
  },
  // currency
  {
    xs: 12,
    sm: 4,
    inputType: "select",
    userId: "currency",
    userName: "currency",
    userLabel: "ვალუტა",
    error: "currencyError",
    option: [
      {
        key: "GEL",
        name: "GEL",
      },
      {
        key: "USD",
        name: "USD",
      },
      {
        key: "EUR",
        name: "EUR",
      },
    ],
  },
  // jobStartDate
  {
    xs: 12,
    sm: 4,
    inputType: "date",
    userId: "jobStartDate",
    userName: "jobStartDate",
    userLabel: "სამუშაოუს დაწყება",
    error: "jobStartDateError",
  },
];
