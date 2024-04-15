import { checkToken } from "../../utilities/users-service";

export default function MyLearningPage() {

    async function handleCheckToken(event) {
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <>
        <h1>MyLearningPage</h1>
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
}