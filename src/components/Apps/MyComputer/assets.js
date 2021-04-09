import documents from '../../../media/documents.png';
import bin from '../../../media/bin.png';
import porthole from '../../../media/porthole.png';
import defaultSettings from '../../../media/default.png';
import network from '../../../media/network-workgroup.png';
import userDocs from '../../../media/user-documents.png';
const assets = {
  systemTasks: {
    header: 'System tasks',
    item1: {
      img: defaultSettings,
      text: 'View system information',
    },
    item2: {
      img: porthole,
      text: 'Add or remove programs',
    },
    item3: {
      img: bin,
      text: 'Change a setting',
    },
  },
  otherPlaces: {
    header: 'Other places',
    item1: {
      img: network,
      text: 'My Network Places',
    },
    item2: {
      img: userDocs,
      text: 'My Documents',
    },
    item3: {
      img: documents,
      text: 'Shared Documents',
    },
    item4: {
      img: bin,
      text: 'Control Panel',
    },
  },
};
export default assets;
