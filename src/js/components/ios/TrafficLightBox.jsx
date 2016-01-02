import React  from 'react-native';
let { Text, View, requireNativeComponent, NativeModules } = React;

let NativeTrafficLightBox = requireNativeComponent('TrafficLightBox', TrafficLightBox);
let TrafficLightBox = React.createClass({
	render() {
		return (
			<View>
				<Text>This is the Custom View react component</Text>
				<NativeTrafficLightBox
					ref='trafficLightBox' style={{width: 300, height: 300}}
					isRed={!this.props.switchVal} isTransparent={true} />
			</View>
		);
	}
});

export default TrafficLightBox;