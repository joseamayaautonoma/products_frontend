
export const Product = ({ product, click }) => {

    const onDivClick = ( ) => {
        click( product )
    }

  return (
    <div className="card my-2 shadow-sm" onClick={ onDivClick } >
        <div className="card-body">
            <p className="card-text">{product}</p>
        </div>
    </div>
  )
}
