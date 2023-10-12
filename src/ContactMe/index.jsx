import { Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ContactMe () {


    return (
            <Row className="Contact">
                <h5>Are you ready to work with me?</h5>
                <h5>Don't be shy, say Hello!</h5>
                <div>
                    <h5><font color="white">You can contact me at:</font></h5>
                    <Link href="mailto:enirosehellum@gmail.com">
                        <Image
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFNklEQVR4nO2Z+1MbVRTHM6MzOqP+quF3X+Or/4DwGw6v0pZQJIAjhY4iaoDwSsUktsBMqQ+eggVC6VhbDCVUC7VjaLEFHGyTkL1JpdmlnSm0P8gjJgXLboIc524IkJKE7GZDp2POzHcmz7P72XPOvWfPikRRi1rUova/NcZm2UVTSM5QSEuTBEGTyE5TyMWKfU2Y174rwb8N5mtR//ybWE79C8kOvfiuUy+ecQ6JEyN28jA5+RxNoVKGIv5kKATcRNzA4GC1PhsYRDzjHIoBj8TTwgMMDz+JryxNEQvcAXxFU8Q8TRLF2OfDx4koCH0TvUpTxES4AFuBkImeJF7xARkSJ66l1bRDL04QDoIiUmmKWBQaYlN07tOkebcoksZQlvdoCrkjBcFsRMbNkChHkJO2x6WP2WMlI76RiDwEswmGJi0p4YPESkYWYtOvshBTppdwyHcKgtlIs0VcjyLBVqcIFHbIMCQy+lvNOBu7eT0iCGYdhihy6GOyHfqYLH7RMJufoSk058/5nVE9/NTyDZyuqxZE2Nf02FCgFJvHGy//aLA79lbH59uaIH/ffmg/dQ7O6scFUfv3/ZC3Lx0GvmsKVPxy3iD+2g4cicLsXKg4/jsoVA0wRMzA2G1HWLpkvQdVh5ug4vgoFGblBogMcYMfhM2yy9+VwSlQfLgLFN0ToDhhhFJlC/RdNvGG6L+CoFjxFVR2GVifxWoN/Pxtvf96mTK/IVhadVerQFan84CsqbTmJHScucAZouusHuRHND6+ZHU69hiBip57RCikDRUES35MB8caT4YM0dChBXld7xY/suAgPdwjQiLEBQSrrOUyVKnr4crNvwICXLXNgvJII5Q16f36kAUDoYgJ7iAUMe+6QwJWqCBYFZ3XoFzZAL9cn9oC8evEbahUNUJFx3jA/8uCgqA5PiAMHxDPImCCEnUrnBocXYc4c3Ecig7VswtEsP/KgkeE5gXCNbXWi19jgD21F0Aib4L6jl5o7tZBekkjpNYOgrzTsOMg83xAcsuaIalcA/HqflYpFe2svO8TyzvhQGnzDqYWybHYTxghp7AWEko3TjqQEsq7IPujar9pJhO62Lksv5Waa5CR9xm8U9m9LcS6Dv0AGQeVUNn5R4SXX4od62wLUt42Aum5Coiv6gkdwitlL6TlfQ5lrb+FBmJDMu4RuYXeCtiiqDs97UT9Rdibr4J4dR93CK9UOtj7YQ3Ivh7w+FRp4Hxrg/8WhZp4nTMIGxUSWfw1jR/nHIDCWi3s/qCGP8BDSik4CgXVp+GTbIGbxmDpNdDWCBmJeyCx4CjEF7UIIuwrIyEVBje18avL/8Dq8pK3Pkp4gwS7scJXDXep7UqFIMK+ZsYu+RwDQ6w+WPLcWPmZRnKLCkkU+8/XndMyhT4NC2Jj+IBMjwqCJpEBQPuESAhbpqwv0hThfCzHQTD8/tMuQ2afy5C55DJIe2nbSNpODuiYSd2Km/jyi7CjwBikB91GKXjFmLLy8RhTaJh/7/8NqytucE1TmyKB3C5j9gOXUeoIH8SUle8DYszMw5/jMaaQU0dYWQFs7tm73nRy0jaU7L4uTXKb3g3/wQ6QCU/hlHIZpIsuY6YWv7e/LUmxx+5Ppm+ZX8YTQCFAXDNT4J69B8yUhS1sPJ4VRdrscRKnPVbi2PSgpyhQu8+tqNEcXmJBqNVpO1uIS0taiJP4hBtvVLgDoElk5QxAIgvescPe7IQ23NSxUSKJH/G9A34sh+801zTPfkYSPZ7fWF8T/ASiFrWoRU30uNh/GyPKERs5PiwAAAAASUVORK5CYII=" alt="email"/>
                        enirosehellum@gmail.com
                    </Link>
                    <p>
                        <Image src="data:image/png;base64,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" alt="phone"/> 
                        +4792060867
                    </p>
                </div>
            </Row>
    )
}

