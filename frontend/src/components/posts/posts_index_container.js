import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import PostsIndex from './posts_index';

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);