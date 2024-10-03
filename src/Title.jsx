export default function Title( { locked } ) {

  return <h1 className="title">
    {locked
      ?  <span>Limit! Buy <b>PRO</b></span>
      :  'Fancy Counter'}
  </h1>;
}