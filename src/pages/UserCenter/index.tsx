import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {showVersion, VERSION} from "../module";
import {ToolType} from "../../../start/common/utils";

type Props = {}

class UserCenterFragment extends PureComponent<Props> {

    useOtherModuleValue = () => {
        showVersion(11)
        const entity = {} as DetailEntity
        const a = VERSION
        const type = {} as ToolType
    }

    componentDidMount() {
        this.useOtherModuleValue()
    }

    render() {
        return <View></View>
    }
}
