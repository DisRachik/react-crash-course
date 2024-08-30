const names = ['Ihor', 'Rachik'];

export default function Post() {
  const choiceName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <>
      <h1>Hello </h1>
      <p>{choiceName}</p>
    </>
  );
}
