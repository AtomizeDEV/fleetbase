import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import formatCurrency from '@atomizedev/ember-ui/utils/format-currency';
import formatMeters from '@atomizedev/ember-ui/utils/format-meters';
import formatBytes from '@atomizedev/ember-ui/utils/format-bytes';
import formatDuration from '@atomizedev/ember-ui/utils/format-duration';
import formatDate from '@atomizedev/ember-ui/utils/format-date';

export default class DashboardCountComponent extends Component {
    /**
     * The title of the metric count.
     *
     * @memberof WidgetKeyMetricsCountComponent
     */
    @tracked title;

    /**
     * The value to render
     *
     * @memberof WidgetKeyMetricsCountComponent
     */
    @tracked value;

    /**
     * Creates an instance of WidgetKeyMetricsCountComponent.
     * @param {EngineInstance} owner
     * @param {Object} { options }
     * @memberof WidgetKeyMetricsCountComponent
     */
    constructor(owner, { options, title }) {
        super(...arguments);
        this.title = title;
        this.createRenderValueFromOptions(options);
    }

    /**
     * Creates the value to render using the options provided.
     *
     * @param {Object} [options={}]
     * @memberof WidgetKeyMetricsCountComponent
     */
    createRenderValueFromOptions(options = {}) {
        let { format, currency, dateFormat, value } = options;

        switch (format) {
            case 'money':
                value = formatCurrency([value, currency]);
                break;

            case 'meters':
                value = formatMeters([value]);
                break;

            case 'bytes':
                value = formatBytes([value]);
                break;

            case 'duration':
                value = formatDuration([value]);
                break;

            case 'date':
                value = formatDate([value, dateFormat]);
                break;

            default:
                break;
        }

        this.value = value;
    }
}
