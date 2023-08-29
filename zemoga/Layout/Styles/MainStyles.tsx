import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    color: 'white',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  textDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'space-around',
    gap: 20,
  },
  heartText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },
  heartBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartImage: {
    margin: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 50,
    borderBottomColor: '#D0D3D4',
    borderBottomWidth: 1,
  },
  descriptionText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 8,
  },
  containerList: {
    padding: 16,
  },
  postContainer: {
    backgroundColor: '#F0F0F0',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  postTitle: {
    fontSize: 16,
    margin: 20,
  },
  textBody: {
    fontSize: 15,
    margin: 20,
    marginTop: 50,
    alignSelf: 'center',
  },
});

export default styles;
