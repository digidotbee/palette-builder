export const readColour = async hex => {
  const response = await fetch(
    `http://www.thecolorapi.com/id?format=json&hex=${hex.replace('#', '')}`,
  );

  return await response.json();
}
