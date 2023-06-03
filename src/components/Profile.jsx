
export const Profile = ({ user }) => {
    return (
        <div className="mb-3 p-3" style={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 10
        }}>
            <img className="img-fluid d-block mx-auto" width={100} src={ user.photo } alt="Foto de perfil del usuario" />
            <div className="row">
                <div className="col-md-8 mx-auto text-center">
                    <h4>{ user.name }</h4>
                    <small>{ user.email }</small>
                    <h6>{ user.age }</h6>
                </div>
            </div>
        </div>
    ) 
}
