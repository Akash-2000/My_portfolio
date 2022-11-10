import React from 'react'
import './skill.scss'
export default function Skills() {
  return (
    <div className="skills">
    <div className="title">
        <h1>MY SKILLS</h1>
    </div>
    <div className='skillset'>
        <div className="leftcontainer">
            <div>
            <h1>FrontEnd</h1>
            </div>
        <div className="leftimg" id='skills'>
             <img src="https://th.bing.com/th/id/OIP.pqcPskVdTrJqfhZ-Z49AtQHaHn?w=186&h=191&c=7&r=0&o=5&pid=1.7" alt="Html" />
              <img src="https://th.bing.com/th/id/OIP.yUIb5S_kj98Eg5tT-Onx1AHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7" alt="css" />
            </div>
            <div className="RIGHT">
                    <img src="https://th.bing.com/th/id/OIP.fxMFAWgcs9ASnyZoIMeLJAHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" alt="js" />
                    <img src="https://th.bing.com/th/id/OIP.cZbjch1l3m5ZWey_DN9SSgHaGa?pid=ImgDet&w=183&h=158&c=7" alt="Ract" />
            </div>
        </div>
        <div className="middlecontainer">
            <h1>BackEnd</h1>
            <div className='middle'>
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AP8DASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGBAcIAwEC/8QAQRAAAgIBAgQDBAQMBQQDAAAAAQIAAwQFEQYSITETQWEHIlFxNnWBsxQjMjVCcnN0kaGxtDM0YmOyFSZSwUSi4f/EABkBAQADAQEAAAAAAAAAAAAAAAACAwQBBf/EACARAQEBAAICAwEBAQAAAAAAAAABAhEhAzEEEjJBcWH/2gAMAwEAAhEDEQA/ANRREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA2cnswXUuHtE1TSM1lzsrT8fKvx83l8G17U5yKrEXdduw3B+Y7zXuo6XqukZL4mpYl2LkL15Ll2DDtzIw90j1BInSPCX0X4W+qMD7pZge0DGxb+E9de6mux8ehLqGdQzVWC1BzVseoPl0/9wOcYiICIiAiIgIiICIiAiIgIiICIiAiTGh8Oa9xDf4OmYj2KrAXZD7pjUb7f4tp6euw3J8gZZtZ9l3EumYy5OHZVqYVObIqxUZL6yO/h1uSWHy6/wCmBQYn1kdGZHUqykqysCGVgdiCD13nyAiIgImVhafn6jcKMOh7bO7cvRUHxdj7oHzMl87hPWcKpLU8PJ93e1MbmL1kdTsrAEj5fwkbvMvFqN1mXi1Xon0ggkHuOh377z5JJEREBEzNO0zVNWyUxNOxLsrIfqEpXflHbmdj7oHxJIEtOp+zTjDTcJMwVY+ZshbIowHey+gbb9UZRzevLv8AwG8Dc/CX0Y4W+qMD7pZjcd/RHiX90X71Jl8KI9fDXDKWIyOmk4KsrgqykVL0IPWYnHf0R4l/dF+9SBzZERARMzTtL1XVslMTTcS7KyH68lK78o7czsfdA9SQJcs72WcWYmBXlUti5mQFLX4eM7eNWO/4tnAVj8QNvTmgUGJ+7KraXsqtreu2tilldilXRh0KsrdQZ+ICIiAiIgIiICIiB7YuLl52Rj4mJTZfk5FgrpqqG7ux8gP6zbPDXsorTwsviS0WN0Yafiv7g9Mi9ep+SkfrHtKV7Pfpjw5+2yf7W2dHQPHGxcTDoqxsSimjHqXlqqoRUrQd/dVRtPaV7iXi3ROF6anznssyb1dsXExwDbby9OYk7Kq7+ZPyB22lQ0X2t6fk5L06zhHBqssPgZGO7311qT0XIUgN082AP6o7wLVxFwVw7xGrvk0eBnbbJnYoVL9/IWj8lh8xv8CJpbibgjXuGfx16pk6cziuvNx9+TmPZbaz7yk/aPgTOjUdLESxGDI6q6MpBVlYbggjyMp/tN6cHav63af/AHVcDnpFd2VEUs7MFVVBLMxOwAA85ctJ4Ltfku1ZzUncYtRHin9o43A+Q3Pyld0Qb6tpY+OSk2vjPzIFO/Mg2PqPIzB8zzb8ckwx/J8uscTL7j4uLh0rRi0V01LtslSgDftuT3J9SZ8tG4Pz3B9Z7ntPKzznnYtvdY5efaC1HQtL1UM1ieDk7HbIpADE/wC4vY/19ZSNV0HUtK3e1RZjFgq5FXVNzvsHB6g/P+M2Tvs+3xkFxPcbNMzEB9yvwftbxF3P/qb/AA+bUsy0eLzalmWv0R7GRK1Z3dlRFQFmZmOwVQOu58psnhr2WalneFla87YOKdmGJXsc20d9nJ3VB2+J9B3lR4RH/dHC/wBb4P8AK1Z03tPRegwNL0fSNFxlxNMw6canoWFa+/YwG3Na7bux9STM/aRWt6/ovD2KMrVMpaVfmFFajnvvZQCVqrHU+W56AbjcjeUzS/azoOXmW4+fiX4GMz8uLks4vXl6AfhC1rup+XMOvpuQ2RK1x39EeJf3RfvUlipupyKqr6LEtpuRLarKmVksRhzKysvQg+UrvHf0R4l/dF+9SBzaqs7KiKWZmCqqglmYnYAAdd5svhv2V6lm+Fl6+7YOMdmGJWVOZYO+1hO6oP4n0Eo2gfn7h36303+5SdS7d/tgYOl6RpGjYy4mmYdONQNiwrG7OR05rHbd2PqSZnbSJ1ziDRuHcUZeqZHho5KUVovPfe4G5WpB/MkgDfqRvKZie1Gk5IbVdGzMHSshwMPMHNaQvbmvQKO/f3d/ke8C08Q8I8PcSVn8Ox+TKC8tWbj7Jkpt2BbbZh6MD9neaW4n4B1/hwW5IAzdMQ/5vHUg1KTsPwioklfnuR69dp0HjZONmY9GVjWpdj31rbTbWd0dGG4IMg+NrqKeFeI2utSsW4F1FZdgOe2wcqou/cnyEDmmIiAiIgIiICIiBavZ79MeHP22T/a2zo6c4ez76Y8Oftsj+2tnR+/YQNK+2H87aF9W2fftNYzYntX1DTs7WtOrxMmq9sPCanJNLB1rtNrNyFl6bjzG/Sa7gdV6T+a9I+r8L7lJWfab9D9V/b6f/cpJzhzUdN1HRtKtwcmq9Ew8Wq3w2BaqxKlVksXuCNuxEg/ab9D9V/b6f/cpA0ZoI31jSf3qubLe8Y9lXTfcjnH+32M1jo91OPqmm33OEqryEZ2PYAS+vZ4rG3cEP7ylTuvL5cpE8/5c5sed8y8WLHuCqkHcHYg/EGeVn6UxdOv56zSx96vqnqm/b7JlWecwYnF4Z8+mBduDuO432kBroB0jOYf7P3qyev67/Iyu69dVXpeVS7qLLzT4SE++3LYGJA77bTT4v3Hcd+SIThH6UcL/AFtg/erOm5y/wxfj4vEXDmRkWpVRTqmFZbZYdkRBau7MfgPOdPo6OqsjKyuA6spBVlPUEEdNp6z2GpfbJVaw4XtFdhqr/wCpI9gViis5xyqs3YE7HYenpNRgEnYA7noB6zrO+jHyabaMiqq6i1SltVyK9bqfJlYEESB0zgvhLSMy7PwtOqXJd+etrWa4YxPljizcL59uvXbfbpAyuF67auHOGara3rtr0nT0sSxSroy0qCrKeoMwuO/ojxL+6L96kssqntBysSjhPXUuvqrfJpSnHV2CtdYbUPLWp6k+fT4ekDQugfn7h36303+4SdSzlbR7qcbWNEyL3CUUalg3XOQSErrvR2YgdegE6lpvx8mqu/HtruotXnqtpZXrsU9irqSCPtga49qyWivhPM8C2zFws+6zLsrrLpUpNJAc9hzbHbf4SqavrmiWaVmLXlpc+Zj2VUVIpNgY7bGxT+Tt6/ZN6OiWK6Oqsjgq6uoZWUjYhgem011xL7LdJ1AWZOhsmnZh3Y455jg2n4ADdk+zcennIaxNWW/xXrxzVlv8QmH7StN0XhjQ9P0/GfK1SjCWm38IVq8Wh1J6uQeZvkNvmO015rGu63r2QcnVMyy9xv4aH3aaVP6NVS+6B9nz3n51bRNa0PIOLqmHbj2Hfw2Yb1WqP0qrF3Uj5GR0msIiICIiAiIgIiIExwxq2Poeu6VquRVbbTiWWNZXTy+Iwep6vd5yB0337yd4l9onEOveLj47HTtNbdTj4znxbV6j8feNmPqBsPQ95SogIiIGbpuq6to+SmXpuXdjXrsC1TdHX/xsQ7qR6EGXPWvaJZr/AA1laRn4QTULLcQjIxmAx7EqsFhZq394N07AkdfLbY6/iAmfg6rnYB2qfmqJ96qzdqz8vMH5TAicslnFcuZqcVfNL13DyHqZG8HIBG9VrABviEbsd5abr6EoOTbalWOFDG25gqDfy3Pn6TTYJE9rcrNyEpquyLrUpHLSlju6pv5KCdpk18XNvMrLfjTnmXpatV4srJenS037g5Vy/dVn+p/hKttm5+RsBdkZFp/1O7GTOn8M5N1f4XqVq4GCvvM9xC2Eeit29N+voZk269pul1ti8P4yhiNrM29d3c/FVbqfTfp/pEuzM56xFmfrnrE7QOZpmp4HIcvFsqD/AJLHZkJ+HMpK7+m8muHeNeI+G2SvGv8AHwObd8LKJenY9/CP5Sn5H5gzxwuJ8+oPVqCjPxbSfES/Y2AE7nlYgj7CD9kyrdE0nVkfI0HJVbQC1mFeeVlP+nfqP5j1El9rP0n97n9tx8N8dcO8ReHTXb+Cagw2OFlsodm/2LOit9mx9BLRbdRRXZddZXVVWpeyy1lREUdyzMQAJyjfj5WHcar67KbkIOzAg9D0KkfyIMkNQ1jijUMPGp1HO1DIwqAvgpkWO1Y/8WbfufgTvLFjaXEvtVwcXxcTh6tczIG6nNvVhi1nsTUnRmI+J2H6wmo9S1XVdYyXzNSy7srIbcc1rdFXfflrQbKB6AATCiAk5oPFPEPDlvPp2UwpZua3Fu3sxbf1qyeh9QQfWQcQOgOG/aRw9rfhY2Yw03UG2Xw8hx+D3N2/E3nYdfINsfhvLnfkY2LTbkZN1VFFQ5rbb3WutF+LOxAnJky79S1XKx8bEyc7Luxcb/L0XX22VVeXuIxIH8IGz+NfaLoedh5uj6Zh1Z6XI9T5mZX+IqYgr4mNWw5y47qx22I36zUsRAREQEREBERAREQEREBERAREQEREBLDwhVVZq6mxFbwsa2xOYb8rhkXcevUyvSy8Gfnd/wBzt/51yO/zVfl/FROpanqGo3u2XczhHYV1j3aqxufyEHSZGRoeTRVoj12C6zVlBqqRSpRiEYAsTt+l39JF2f4lv67/ANTLhnZL4ePwLkrU1ppoLGtd+Zl8GkMBt57byNvHEjltzxMsM8M4OPypn65h4+QVVjUAp5dxuOrOD/8AUTFz9FzNJrp1DFzEvxudQmTisVZGO+xPKT0PxB//AGSyhwXqt9mVbnZOJk2nmuWxXX39tjuCjL/Bp8ytOy8bRs1NM1WnM0vm8bIqCV84AZSWVxuemwJHSQmr1zUJu9c18y8i3UeFVzMvktyaM5K0tKgNy7kHfl+PnInI1HGsxjWoYuVtAUr13tJLeI2+xC7+7sPIfCSK/Qy76zX/AJSryeJ7/wBTxJ3/AKRESxaREQEREBERAREQEREBERAREQEREBERAREQEREBLJwaQNXfr/8ADu/51mVueuPkZGLbXfj2PXbWd0dDsQZzU5nCOp9s2PuRXbVffXajJYrvzK4KsOpPUGW7Nzm03F4IzFUv4WM4ZQdiyNRSrAH4/CYa8Q6ZnV1prmmi+yv8i/G2RyPgV3X7dm29J+dYbUtaoxcnC0y6vS8Otq8fblLsCQGYIvkNgOgO23rKrzbOYqvNsmo9civgrUbrcs6hlYtl7Gy2tqzsHbqx2CMOvo0/ORqWhadpmZpukPfkWZoK35FylUVTsDtuASdug90d/OQ2naRqepvyYtJKg8rWvutSH1b4+gBMnfD4Z4d63EanqidRWpHg0uO3Meqj+Z+UWSdeyyTrnn/j8NXZVwa4sRkL6hW6BwVLKx3BAPkdukqsktT1nUdVYHJsAqRiaqKhy1Vk9NwO5PqSZGyeZZO1mJZOyIiTTIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJn6fquo6Y/Ni3EKTu9T+9U/6yn+o2MwIizn25Zz7TudxRquZV4Ffh4lJBFi4nMrWb9+ZyebY/AbSC3iJyZmfRnMz6IiJ10iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH//2Q==" alt="" />
        </div>
        </div>
        <div className="rightcontainer">
            <h1>DataBase</h1>
            <div className="backend">
                <img src="https://th.bing.com/th/id/OIP.ueL15FS1RSa6-U0QOJ2eXgHaHa?w=150&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
                <img src="https://th.bing.com/th/id/OIP.hYiBgY7Yj_6OI2yyDUD98wHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7" alt="" />

            </div>
        </div>
    </div>
    </div>
    
  )
}
