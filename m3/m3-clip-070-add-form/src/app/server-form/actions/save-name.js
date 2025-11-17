"use server";

export async function saveNameAction(formData) {
  const name = formData.get("name");

  // artificial delay to make server round-trip obvious
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Saving name:", name);

  return { ok: true };
}
