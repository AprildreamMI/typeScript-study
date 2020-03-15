let dburl = 'xxxxx'

function getData () {
  console.log('获取数据库中的数据')

  return [
    {
      title: '123456',
      desc: 'xxx'
    },
    {
      title: '123456',
      desc: 'xxx'
    },
    {
      title: '123456',
      desc: 'xxx'
    },
    {
      title: '123456',
      desc: 'xxx'
    }
  ]
}

// 如果只需要导出一个 则使用默认到处
// export default getData


// 导出多个
export {
  getData
}