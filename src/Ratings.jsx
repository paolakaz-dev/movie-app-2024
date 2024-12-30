import "./index.css";

export default function Ratings({ ratings }) {

    console.log(ratings)

    /*
            table
                thead?
                    tr
                        td/th
                    tr
                        td/th
                tbody
                    tr
                        td/th
                    tr
                        td/th
    */

    return (
        <>
        <table>
        <thead>
            <th>Source</th>
            <th>Value</th>
        </thead>
        <tbody>
        {ratings.map((rating, index) => {
            return (
                <tr key={index}>
                    <td>{rating.Source}</td>
                    <td>{rating.Value}</td>
                </tr>
            )
        })}
        </tbody>
        </table>
        

        </>
    )
}