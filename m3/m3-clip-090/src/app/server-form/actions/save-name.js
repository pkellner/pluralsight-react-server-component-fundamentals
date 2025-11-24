"use server";

export async function saveNameAction(formData) {
  const name = formData.get("name");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Saving name:", { name });

  return ({ ok: true });
}