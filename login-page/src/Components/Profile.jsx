
export default function Profile(prop) {
    const { logoutBtn } = prop;
    const { name } = prop;
    // console.log(name);

    return <div>
        <h1>Hello {name}</h1>
        <button onClick={() => { logoutBtn(false) }}>Log out</button>
    </div>
}