import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View) => {
  return class extends Component {
    
    state = {
        data: null,
        loading: true,
        error: null
    }

    componentDidMount() {
        this.props.getData().then(
            data=>{
                this.setState({
                    data,
                    loading: false,
                    error: false,
                })
            })
        .catch(this.onError)
    }
    

    onError = (error) => {
      this.setState({error: true})
      return <ErrorIndicator />
    }

    componentDidCatch(error) {
      this.setState({error: true})
      return <ErrorIndicator />
    }


    render() {
        const { loading, error, data } = this.state;
        if (!data) {
          return <Spinner />
        }
        return <View {...this.props} error={error} loading={loading} getData={this.props.getData} data={data} />
    }
  }
}

export { withData };