
export const mapStateToProps = (state) =>{
    return {
        info: state
    }
}
export const mapDispatchToProps = (dispatch) => {
    return{
        select: (index) => dispatch({type: 'select', index}),
        Increase: (index) => dispatch({type: 'add', index}),
        Decrease: (index) => dispatch({type: 'reduce', index}),
        Buy: () => dispatch({type: 'buy'})
    }
}

