// schemas/user.js
export default {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
        validation: (Rule: { required: () => { (): any; new(): any; email: { (): any; new(): any; }; }; }) => Rule.required().email(),
      },
      {
        name: "password",
        title: "Password",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
      },
    ],
  };