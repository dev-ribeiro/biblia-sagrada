import nvi from '../../../assets/pt-br/nvi.json' assert {type: "json"};
import aa from '../../../assets/pt-br/aa.json' assert {type: "json"};
import acf from '../../../assets/pt-br/acf.json' assert {type: "json"};

export function getBiblieByVersion(version) {
    switch (version) {
        case ('nvi'):
            return nvi;

        case ('aa'):
            return aa;

        case ('acf'):
            return acf;

        default:
            return nvi;
    }
}
