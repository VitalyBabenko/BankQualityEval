const API_URL = "http://localhost:4000";

export const sendForm = async (formResult) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formResult),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("An error has occurred:", error);
    return null;
  }
};
