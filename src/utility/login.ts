// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Error from "next/error";

// export const loginUser = async (email: string, password: string) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//       credentials: "include",
//     });

//     const data = await res.json();
//     return data;
//   } catch (err: any) {
//     console.error(err);
//     throw new Error(err.message || "Login failed. Check your credentials!");
//   }
// };
