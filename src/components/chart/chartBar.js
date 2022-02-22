import './chartBar.css';

function ChartBar(params) {
  let barFillHeight = Math.round((params.value / params.maxValue) * 100) + '%';

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='chart-bar__label'>{params.label}</div>
    </div>
  )
}

export default ChartBar;