import { ChangeEvent, Component, FormEvent} from "react"
import { pushDataFromUser } from "../services/menu"

type Props = {
    onTrue : any
    onClose : any
}

type State = {
    payeeName : string
    expenseDescription : string
    price : number
    date : string
}

class ExpenseTracker extends Component<Props, State> {

    constructor (props : Props) {
        super(props)
        this.state = {
            payeeName : "",
            expenseDescription : "",
            price : 0,
            date : this.setDefaultDate()
        }

        this.setpayee = this.setpayee.bind(this)
        this.setExpenseDescription = this.setExpenseDescription.bind(this)
        this.setExpenseDescription = this.setExpenseDescription.bind(this)
        this.loggedDate = this.loggedDate.bind(this)
    }

    setDefaultDate = () => {
        const today = new Date();
        return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    }

    setpayee = (event : ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            payeeName : event.target.value
        })
    }

    setExpenseDescription = (event : ChangeEvent<HTMLInputElement>) => {
        this.setState({
            expenseDescription : event.target.value
        })
    }

    setPrice = (event : ChangeEvent<HTMLInputElement>) => {
        this.setState({
            price : parseInt(event.target.value)
        })
    }

    loggedDate = (e : ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        // console.log(typeof (e.target.value))
        
        this.setState({
            date : e.target.value,
        })
    }

    submitHandler = async (event : FormEvent<HTMLFormElement>) =>{
        event?.preventDefault()
        // console.log(this.state)
        const finalDate = {
            ...this.state
        }
        const data = await pushDataFromUser(finalDate)
        // console.log(data)
        this.props.onTrue()
    }

    el = document.createElement('div')

    render () {

    const element =(
        <>
            <section>
                <header>
                    <h1>Add New Item</h1>
                    <p>Read the below instructions before proceeding:<br /> Make sure you fill all the fileds where * is provided</p>
                </header>
                <form onSubmit={this.submitHandler}>
                    <article>
                        <p>Name</p>
                        <select name="Name" id="district" required value={this.state.payeeName} onChange={this.setpayee}>
                            <option value="" defaultChecked>Choose</option>
                            <option value="Rahul">Rahul</option>
                            <option value="Ramesh">Ramesh</option>
                        </select>
                    </article>

                    <article>
                        <p>Product purchased</p>
                        <input type="text" required  value={this.state.expenseDescription} onChange={this.setExpenseDescription}/>
                    </article>

                    <article>
                        <p>Price</p>
                        <input type="number" required value={this.state.price} onChange={this.setPrice}/>
                    </article>

                    <article>
                        <p>Date</p>
                        <input type="date" required value={this.state.date} onChange={this.loggedDate}/>
                    </article>

                    <button type="button" className="form-button" onClick={this.props.onClose}>Close</button>
                    {/* <button>Reset</button> */}
                    <button className="form-button">Submit</button>
                </form>
            </section>
        </>
    )

    return element
    }
}
export default ExpenseTracker