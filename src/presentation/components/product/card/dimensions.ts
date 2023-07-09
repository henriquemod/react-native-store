import { Dimensions } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const CARD_DIMENSIONS = {
  width: width - width * 0.55,
  height: height - height * 0.78,
}

export default CARD_DIMENSIONS
