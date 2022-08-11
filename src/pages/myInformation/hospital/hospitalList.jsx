import {Component} from "react";
import {Image,View} from "@tarojs/components";
import {connect} from "react-redux";
import {AtRate} from "taro-ui";


@connect(({hospital}) => ({hospital}))
class HospitalList extends Component {

  render() {
    const scrollStyle = {height: '450px'}
    const scrollTop = 0
    const Threshold = 300
    return (
      <View>
          {
            this.props.hospital.hospitalList.map((hospital, index) => {
              return (
                <View className='at-row  hosp-list' key={index}>
                  <View className='at-col at-col-4 hospitalList-img-center'>
                    <Image className='hospitalList-img' src={hospital.hosCover} />
                  </View>
                  <View className='at-col at-col-8'>
                    <View className='hos-list-hospName'>
                      {hospital.hospitalName}
                    </View>
                    <View>
                      <AtRate size={15} className='hos-list-star-ab' value={hospital.hospitalSource} />
                    </View>
                    <View className='at-row'>
                      <View className='at-col at-col-8 hos-book-num'>今日预约量
                      </View>
                    </View>
                  </View>
                </View>
              )
            })
          }
      </View>
    )
  }
}

export default HospitalList
