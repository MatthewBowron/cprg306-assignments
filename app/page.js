import Link from "next/link";

export default function Home() {

  var linkStyles = "m-2 underline text-cyan-600 hover:text-cyan-300"
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li> <Link href="./week-2/" className={linkStyles}>week-2</Link> </li>
        <li> <Link href="./week-3/" className={linkStyles}>week-3</Link> </li>
        <li> <Link href="./week-4/" className={linkStyles}>week-4</Link> </li>
        <li> <Link href="./week-5/" className={linkStyles}>week-5</Link> </li>
        <li> <Link href="./week-6/" className={linkStyles}>week-6</Link> </li>
        <li> <Link href="./week-7/" className={linkStyles}>week-7</Link> </li>
        <li> <Link href="./week-8/" className={linkStyles}>week-8</Link> </li>
      </ul>
    </main>
  );
}
