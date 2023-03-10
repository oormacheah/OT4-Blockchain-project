import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { GrSearchAdvanced } from 'react-icons/gr';
import { Row, Col, Alert, Button, Dropdown } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { PaperTable } from './paperTable';
import { SearchForm, NewPaperForm } from './paperForm';

function HomeRoute(props) {
    const navigate = useNavigate()
    return (
        <>
            <br />
            {props.msg && <Row>
                <Alert variant={props.msg.type} onClose={() => props.setMsg('')}
                    dismissible>{props.msg.msg}</Alert>
            </Row>}
            <Row>
                <h1>
                    ResearChain
                </h1>
            </Row>
            <Row>
                <GrSearchAdvanced className="search_logo" />
            </Row>
            <br />
            <Row>
                <h6>Your address:</h6>
                <h5>{props.user}</h5>
            </Row>
            <br />
            <Row>
                <div className="d-flex justify-content-center">
                    <br />
                    <Button variant="success" onClick={() => navigate('/upload')}>
                        Upload&nbsp;&nbsp;<i className={'bi bi-upload'}/>
                    </Button>
                    &nbsp;&nbsp;
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            Search&nbsp;&nbsp;<i className="bi bi-search"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate('/search/title')}>
                                Search by title
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/search/author')}>
                                Search by author
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/search/keywords')}>
                                Search by keywords
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Row>
        </>
    );
}

function NewPaperRoute(props) {
    return (
        <>
            <br />
            <Row>
                <Col>
                    <h1>
                        Upload new paper
                    </h1>
                </Col>
            </Row>
            
            <Row>
                <NewPaperForm uploadPaper={props.uploadPaper}/>
            </Row>

        </>
    );
}

function SearchRoute(props) {
    const { criterion } = useParams();
    return (
        <>
            <br />
            <Row>
                <Col>
                    <h1>
                        Search by {criterion}&nbsp;<i className="bi bi-search"/>&nbsp;&nbsp;
                    </h1>
                </Col>
            </Row>
            
            <Row>
                <SearchForm criterion={criterion} setCriterion={props.setCriterion} setInput={props.setInput}/>
            </Row>

        </>
    );
}

function SearchResultsRoute(props) {
    const navigate = useNavigate();
    return (
        <>
            {props.msg && <Row>
                <Alert variant={props.msg.type} onClose={() => props.setMsg('')}
                    dismissible>{props.msg.msg}</Alert>
            </Row>}
            <Row>
                <h1>Results&nbsp;&nbsp;<Button variant="danger" onClick={() => navigate('/')}>Go back</Button></h1>
            </Row>
            <Row>
                <PaperTable papers={props.papers} user={props.user} buyPaper={props.buyPaper}/>
            </Row>
        </>
       
    );
}


export { HomeRoute, NewPaperRoute, SearchRoute, SearchResultsRoute };