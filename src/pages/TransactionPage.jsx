/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import TransactionForm from "../components/TransactionForm";

const TransactionPage = (props) => {
  const { user } = props

  const [transactions, setTransaction] = useState()

  return ( 
      <Container>
        <TopNavbar userName={user.name} />

        {/* Transaction Form */}
        <TransactionForm userId={user.id} />

        {/* Transaction Table */}
      </Container>
   );
}
 
export default TransactionPage;